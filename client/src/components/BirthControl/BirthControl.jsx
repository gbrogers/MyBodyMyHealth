import styles from "./BirthControl.module.scss";
import { useContext } from "react";
import { UserContext } from "../../UserContext";
import axios from "axios";

import Abstinence from "../../images/abstinence.png";
import BreastFeeding from "../../images/breastfeeding.png";
import CervicalCap from "../../images/cervicalCap.png";
import Condom from "../../images/condom.png";
import Diaphragm from "../../images/diaphragm.png";
import FAM from "../../images/FAM.png";
import InternalCondom from "../../images/femaleCondom.png";
import Implant from "../../images/implant.png";
import IUD from "../../images/IUD.png";
import NoMethod from "../../images/noMethod.png";
import Patch from "../../images/patch.png";
import Pills from "../../images/pills.png";
import Scissors from "../../images/scissors.png";
import Sponge from "../../images/sponge.png";
import Sterilization from "../../images/sterilization.png";
import Syringe from "../../images/syringe.png";
import Spermicide from "../../images/spermicide.png";
import VaginalRing from "../../images/vaginalRing.png";
import Withdrawal from "../../images/withdrawal.png";

export default function BirthControl(props) {
  const { user, setUser } = useContext(UserContext);
  const {
    setDropDown,
    dropDown,
    setShowBC,
    showBC,
    birthControl,
    setBirthControl,
  } = props;

  // console.log(user)

  async function handleSelection(e, value) {
    console.log(e.target.value);
    setDropDown(!dropDown);
    setShowBC(!showBC);

    const requestBody = {
      user_id: user.id,
      birth_control_id: Number(e.target.value),
    };
    await axios
      .post("/api/addBC", requestBody)
      .then((res) => {
        const { updatedUser, birthControlObj } = res.data;
        setUser(updatedUser);
        setBirthControl(birthControlObj);
        // console.log(res.data);
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className={styles.birthControl}>
      <button
        value="1"
        onClick={(e) => handleSelection(e, "value")}
        className={styles.mirena}
      >
        <img src={IUD} alt="IUD"></img>
        <h3>IUD</h3>
        <h4>Mirena</h4>
        <p>Lasts Up To 7 years</p>
      </button>
      <button
        value="2"
        onClick={(e) => handleSelection(e, "value")}
        className={styles.kyleena}
      >
        <img src={IUD} alt="IUD"></img>
        <h3>IUD</h3>
        <h4>Kyleena</h4>
        <p>Lasts Up To 5 years</p>
      </button>
      <button
        value="3"
        onClick={(e) => handleSelection(e, "value")}
        className={styles.liletta}
      >
        <img src={IUD} alt="IUD"></img>
        <h3>IUD</h3>
        <h4>Liletta</h4>
        <p>Lasts Up To 7 years</p>
      </button>
      <button
        value="4"
        onClick={(e) => handleSelection(e, "value")}
        className={styles.skyla}
      >
        <img src={IUD} alt="IUD"></img>
        <h3>IUD</h3>
        <h4>Skyla</h4>
        <p>Lasts Up To 3 years</p>
      </button>
      <button
        value="5"
        onClick={(e) => handleSelection(e, "value")}
        className={styles.paragard}
      >
        <img src={IUD} alt="IUD"></img>
        <h3>IUD</h3>
        <h4>Paragard</h4>
        <p>Lasts Up To 12 years</p>
      </button>
      <button
        value="6"
        onClick={(e) => handleSelection(e, "value")}
        className={styles.implant}
      >
        <img src={Implant} alt="implant"></img>
        <h3>Birth Control Implant</h3>
        <h4>Nexplanon</h4>
        <p>Lasts Up To 5 years</p>
      </button>
      <button
        value="7"
        onClick={(e) => handleSelection(e, "value")}
        className={styles.shot}
      >
        <img src={Syringe} alt="syringe"></img>
        <h3>Birth Control Shot</h3>
        <h4>Depo-Provera</h4>
        <p>Recieve Every 3 Months</p>
      </button>
      <button
        value="8"
        onClick={(e) => handleSelection(e, "value")}
        className={styles.nuvaRing}
      >
        <img src={VaginalRing} alt="vaginal ring"></img>
        <h3>Vaginal Ring</h3>
        <h4>NuvaRing</h4>
        <p>Replace Monthly</p>
      </button>
      <button
        value="9"
        onClick={(e) => handleSelection(e, "value")}
        className={styles.annovera}
      >
        <img src={VaginalRing} alt="vaginal ring"></img>
        <h3>Vaginal Ring</h3>
        <h4>ANNOVERA</h4>
        <p>3 weeks in, 1 week out. Each ring used for up to 1 year.</p>
      </button>
      <button
        value="10"
        onClick={(e) => handleSelection(e, "value")}
        className={styles.xulane}
      >
        <img src={Patch} alt="patch"></img>
        <h3>Birth Control Patch</h3>
        <h4>Xulane</h4>
        <p>Change Weekly. 3 weeks on, 1 off.</p>
      </button>
      <button
        value="11"
        onClick={(e) => handleSelection(e, "value")}
        className={styles.twirla}
      >
        <img src={Patch} alt="patch"></img>
        <h3>Birth Control Patch</h3>
        <h4>Twirla</h4>
        <p>Change Weekly. 3 weeks on, 1 off.</p>
      </button>
      <button
        value="12"
        onClick={(e) => handleSelection(e, "value")}
        className={styles.combinationPill}
      >
        <img src={Pills} alt="pills"></img>
        <h3>Birth Control Pill</h3>
        <h4>Combination Pills (Estrogen &amp; Progesterone)</h4>
        <p>Take Daily</p>
      </button>
      <button
        value="13"
        onClick={(e) => handleSelection(e, "value")}
        className={styles.progesteroneOnly}
      >
        <img src={Pills} alt="pills"></img>
        <h3>Birth Control Pill</h3>
        <h4>Progesterone-Only Pills (mini pills)</h4>
        <p>Take Daily</p>
      </button>
      <button
        value="14"
        onClick={(e) => handleSelection(e, "value")}
        className={styles.condom}
      >
        <img src={Condom} alt="condom"></img>
        <h3>Condom</h3>
        <p>Use Every Time</p>
      </button>
      <button
        value="15"
        onClick={(e) => handleSelection(e, "value")}
        className={styles.internalCondom}
      >
        <img src={InternalCondom} alt="internal condom"></img>
        <h3>Internal Condom</h3>
        <p>Use Every Time</p>
      </button>
      <button
        value="16"
        onClick={(e) => handleSelection(e, "value")}
        className={styles.diaphragm}
      >
        <img src={Diaphragm} alt="diaphragm"></img>
        <h3>Diaphragm</h3>
        <p>Use Every Time</p>
      </button>
      <button
        value="17"
        onClick={(e) => handleSelection(e, "value")}
        className={styles.sponge}
      >
        <img src={Sponge} alt="sponge"></img>
        <h3>Birth Control Sponge</h3>
        <p>Use Every Time</p>
      </button>
      <button
        value="18"
        onClick={(e) => handleSelection(e, "value")}
        className={styles.spermicide}
      >
        <img src={Spermicide} alt="spermicide"></img>
        <h3>Spermicide &amp; Gel</h3>
        <p>Use Every Time</p>
      </button>
      <button
        value="19"
        onClick={(e) => handleSelection(e, "value")}
        className={styles.cervicalCap}
      >
        <img src={CervicalCap} alt="cervical cap"></img>
        <h3>Cervical Cap</h3>
        <p>Use Every Time</p>
      </button>
      <button
        value="20"
        onClick={(e) => handleSelection(e, "value")}
        className={styles.fertilityAwareness}
      >
        <img src={FAM} alt="fertility awareness"></img>
        <h3>Fertility Awareness</h3>
        <p>Use Constantely</p>
      </button>
      <button
        value="21"
        onClick={(e) => handleSelection(e, "value")}
        className={styles.withdrawal}
      >
        <img src={Withdrawal} alt="withdrawal"></img>
        <h3>Withdrawal (Pull Out Method)</h3>
        <p>Use Every Time</p>
      </button>
      <button
        value="22"
        onClick={(e) => handleSelection(e, "value")}
        className={styles.breastfeeding}
      >
        <img src={BreastFeeding} alt="breastfeeding"></img>
        <h3>Breastfeeding as Birth Control</h3>
        <p>Every 4-5 hours</p>
      </button>
      <button
        value="23"
        onClick={(e) => handleSelection(e, "value")}
        className={styles.abstinence}
      >
        <img src={Abstinence} alt="abstinence"></img>
        <h3>Outercourse &amp; Abstinence</h3>
        <p>Use Every Time</p>
      </button>
      <button
        value="24"
        onClick={(e) => handleSelection(e, "value")}
        className={styles.sterilization}
      >
        <img src={Sterilization} alt="sterilization"></img>
        <h3>Sterilization</h3>
        <p>Lasts for Life</p>
      </button>
      <button
        value="25"
        onClick={(e) => handleSelection(e, "value")}
        className={styles.vasectomy}
      >
        <img src={Scissors} alt="scissors"></img>
        <h3>Vasectomy</h3>
        <p>Lasts for Life</p>
      </button>
      <button
        value="26"
        onClick={(e) => handleSelection(e, "value")}
        className={styles.nothing}
      >
        <img src={NoMethod} alt="no method"></img>
        <h3>No Method</h3>
        <p>Not very effective...</p>
      </button>
    </div>
  );
}
