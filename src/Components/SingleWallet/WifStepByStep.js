import { React, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
var ec = require('eccrypto');
var crypto = require('crypto');
var qr = require('qrcode');
var bs58 = require('bs58');

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
    return [<strong>Gerar a chave privada:</strong>, 
            <strong>Adicionar '80' no início (prefixo da Mainnet):</strong>, 
            <strong>Aplicar 2 vezes seguidas a função hash SHA256:</strong>, 
            <strong>Selecionar os 8 primeiros caractéres (checksum), para usar no próximo passo:</strong>,
            <strong>Juntar '80' + chave privada do passo 1 + checksum do passo 4:</strong>
    ];
}

function getStepContent(step) {
    switch (step) {
        case 0:
        return `For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.`;
        case 1:
        return 'An ad group contains one or more ads which target a shared set of keywords.';
        case 2:
        return `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`;
        default:
        return 'Unknown step';
    }
}

export default function WifStepByStep(props) {

  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const steps = getSteps();

  //Mainnet
  {
    //WIF Mainnet
    const VERS_MAINNET = '80';
    const vers_pk_h = VERS_MAINNET + props.privateKey;
    document.getElementById("vers_pk_h_mainnet").innerHTML = vers_pk_h;
    const hash_1 = crypto.createHash("sha256").update(vers_pk_h, "hex").digest('hex').toUpperCase();
    document.getElementById("hash_1_mainnet").innerHTML = hash_1;
    const hash_2 = crypto.createHash("sha256").update(hash_1, "hex").digest('hex').toUpperCase();
    document.getElementById("hash_2_mainnet").innerHTML = hash_2;
    const priv_checksum = hash_2.substr(0, 8);
    document.getElementById("priv_checksum_mainnet").innerHTML = priv_checksum;
    const final_pk_h = (vers_pk_h + priv_checksum);
    document.getElementById("final_pk_h_mainnet").innerHTML = final_pk_h;
    const wif = bs58.encode(Buffer.from(final_pk_h, 'hex'));
    document.getElementById("wif_mainnet").innerHTML = wif;
    qr.toCanvas(document.getElementById("wif_qr_mainnet"), wif, function (error) {
        if (error) {
            console.error(error)
        }
    });
    
    {//Public Key Mainnet P2PKH
        const VERS_P2PKH = '00';
        const pubk = ec.getPublic(Buffer.from(props.privateKey, 'hex'));
        const pubk_h = pubk.toString('hex').toUpperCase();
        document.getElementById("pubk_h_mainnet_P2PKH").innerHTML = pubk_h;
        const pubk_comp = ec.getPublicCompressed(Buffer.from(props.privateKey, 'hex'));
        const pubk_comp_h = pubk_comp.toString('hex').toUpperCase();
        document.getElementById("pubk_h_comp_mainnet_P2PKH").innerHTML = pubk_comp_h;
        const pubk_h_hash1 = crypto.createHash("sha256").update(pubk_h, 'hex').digest('hex').toUpperCase();
        document.getElementById("pubk_h_hash1_mainnet_P2PKH").innerHTML = pubk_h_hash1;
        const pubk_h_hash2 = crypto.createHash("ripemd160").update(pubk_h_hash1, 'hex').digest('hex').toUpperCase();
        document.getElementById("pubk_h_hash2_mainnet_P2PKH").innerHTML = pubk_h_hash2;
        const pubk_h_hash2_with_vers = VERS_P2PKH + pubk_h_hash2;
        document.getElementById("pubk_h_hash2_with_vers_mainnet_P2PKH").innerHTML = pubk_h_hash2_with_vers;
        const pubk_h_hash2_with_vers_hash1 = crypto.createHash("sha256").update(pubk_h_hash2_with_vers, 'hex').digest('hex').toUpperCase();
        document.getElementById("pubk_h_hash2_with_vers_hash1_mainnet_P2PKH").innerHTML = pubk_h_hash2_with_vers_hash1;
        const pubk_h_hash2_with_vers_hash2 = crypto.createHash("sha256").update(pubk_h_hash2_with_vers_hash1, 'hex').digest('hex').toUpperCase();
        document.getElementById("pubk_h_hash2_with_vers_hash2_mainnet_P2PKH").innerHTML = pubk_h_hash2_with_vers_hash2;
        const pub_checksum = pubk_h_hash2_with_vers_hash2.substr(0, 8);
        document.getElementById("pub_checksum_mainnet_P2PKH").innerHTML = pub_checksum;
        const address = VERS_P2PKH + pubk_h_hash2 + pub_checksum;
        document.getElementById("address_mainnet_P2PKH").innerHTML = address;
        const final_address = bs58.encode(Buffer.from(address, 'hex'));
        document.getElementById("final_address_mainnet_P2PKH").innerHTML = final_address;
    }
  }
  //Testnet
  {
    //WIF Testnet
    const VERS_TESTNET = 'EF';
    const vers_pk_h = VERS_TESTNET + props.privateKey;
    document.getElementById("vers_pk_h_testnet").innerHTML = vers_pk_h;
    const hash_1 = crypto.createHash("sha256").update((vers_pk_h), "hex").digest('hex').toUpperCase();
    document.getElementById("hash_1_testnet").innerHTML = hash_1;
    const hash_2 = crypto.createHash("sha256").update(hash_1, "hex").digest('hex').toUpperCase();
    document.getElementById("hash_2_testnet").innerHTML = hash_2;
    const checksum = hash_2.substr(0, 8);
    document.getElementById("checksum_testnet").innerHTML = checksum;
    const final_pk_h = (vers_pk_h + checksum);
    document.getElementById("final_pk_h_testnet").innerHTML = final_pk_h;
    const wif = bs58.encode(Buffer.from(final_pk_h, 'hex'));
    document.getElementById("wif_testnet").innerHTML = wif;
    qr.toCanvas(document.getElementById("wif_qr_testnet"), wif, function (error) {
        if (error) {
            console.error(error)
        }
    });
    {//Public Key Testnet P2PKH
        const VERS_P2PKH = '6F';
        const pubk = ec.getPublic(Buffer.from(props.privateKey, 'hex'));
        const pubk_h = pubk.toString('hex').toUpperCase();
        document.getElementById("pubk_h_testnet_P2PKH").innerHTML = pubk_h;
        const pubk_comp = ec.getPublicCompressed(Buffer.from(props.privateKey, 'hex'));
        const pubk_comp_h = pubk_comp.toString('hex').toUpperCase();
        document.getElementById("pubk_h_comp_testnet_P2PKH").innerHTML = pubk_comp_h;
        const pubk_h_hash1 = crypto.createHash("sha256").update(pubk_h, 'hex').digest('hex').toUpperCase();
        document.getElementById("pubk_h_hash1_testnet_P2PKH").innerHTML = pubk_h_hash1;
        const pubk_h_hash2 = crypto.createHash("ripemd160").update(pubk_h_hash1, 'hex').digest('hex').toUpperCase();
        document.getElementById("pubk_h_hash2_testnet_P2PKH").innerHTML = pubk_h_hash2;
        const pubk_h_hash2_with_vers = VERS_P2PKH + pubk_h_hash2;
        document.getElementById("pubk_h_hash2_with_vers_testnet_P2PKH").innerHTML = pubk_h_hash2_with_vers;
        const pubk_h_hash2_with_vers_hash1 = crypto.createHash("sha256").update(pubk_h_hash2_with_vers, 'hex').digest('hex').toUpperCase();
        document.getElementById("pubk_h_hash2_with_vers_hash1_testnet_P2PKH").innerHTML = pubk_h_hash2_with_vers_hash1;
        const pubk_h_hash2_with_vers_hash2 = crypto.createHash("sha256").update(pubk_h_hash2_with_vers_hash1, 'hex').digest('hex').toUpperCase();
        document.getElementById("pubk_h_hash2_with_vers_hash2_testnet_P2PKH").innerHTML = pubk_h_hash2_with_vers_hash2;
        const pub_checksum = pubk_h_hash2_with_vers_hash2.substr(0, 8);
        document.getElementById("pub_checksum_testnet_P2PKH").innerHTML = pub_checksum;
        const address = VERS_P2PKH + pubk_h_hash2 + pub_checksum;
        document.getElementById("address_testnet_P2PKH").innerHTML = address;
        const final_address = bs58.encode(Buffer.from(address, 'hex'));
        document.getElementById("final_address_testnet_P2PKH").innerHTML = final_address;
    }
  }

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <div className={classes.root}>
      <Stepper nonLinear activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepButton onClick={handleStep(index)} completed={completed[index]}>
              {label}
            </StepButton>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Voltar
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finalizar' : 'Avançar'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === (steps.length) && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Recomeçar
          </Button>
        </Paper>
      )}
    </div>
  );
}
