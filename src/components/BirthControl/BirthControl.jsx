import styles from "./BirthControl.module.scss";
export default function BirthControl() {
  return (
    <div className={styles.birthControl}>
      <button className={styles.mirena}>
        <h3>IUD</h3>
        <h4>Mirena</h4>
        <p>Lasts Up To 7 years</p>
      </button>
      <button className={styles.kyleena}>
        <h3>IUD</h3>
        <h4>Kyleena</h4>
        <p>Lasts Up To 5 years</p>
      </button>
      <button className={styles.liletta}>
        <h3>IUD</h3>
        <h4>Liletta</h4>
        <p>Lasts Up To 7 years</p>
      </button>
      <button className={styles.skyla}>
        <h3>IUD</h3>
        <h4>Skyla</h4>
        <p>Lasts Up To 3 years</p>
      </button>
      <button className={styles.paragard}>
        <h3>IUD</h3>
        <h4>Paragard</h4>
        <p>Lasts Up To 12 years</p>
      </button>
      <button className={styles.implant}>
        <h3>Birth Control Implant</h3>
        <h4>Nexplanon</h4>
        <p>Lasts Up To 5 years</p>
      </button>
      <button className={styles.shot}>
        <h3>Birth Control Shot</h3>
        <h4>Depo-Provera</h4>
        <p>Recieve Every 3 Months</p>
      </button>
      <button className={styles.nuvaRing}>
        <h3>Vaginal Ring</h3>
        <h4>NuvaRing</h4>
        <p>Replace Monthly</p>
      </button>
      <button className={styles.annovera}>
        <h3>Vaginal Ring</h3>
        <h4>ANNOVERA</h4>
        <p>3 weeks in, 1 week out. Each ring used for up to 1 year.</p>
      </button>
      <button className={styles.xulane}>
        <h3>Birth Control Patch</h3>
        <h4>Xulane</h4>
        <p>Change Weekly. 3 weeks on, 1 off.</p>
      </button>
      <button className={styles.twirla}>
        <h3>Birth Control Patch</h3>
        <h4>Twirla</h4>
        <p>Change Weekly. 3 weeks on, 1 off.</p>
      </button>
      <button className={styles.combinationPill}>
        <h3>Birth Control Pill</h3>
        <h4>Combination Pills (Estrogen &amp; Progesterone)</h4>
        <p>Take Daily</p>
      </button>
      <button className={styles.progesteroneOnly}>
        <h3>Birth Control Pill</h3>
        <h4>Progesterone-Only Pills (mini pills)</h4>
        <p>Take Daily</p>
      </button>
      <button className={styles.condom}>
        <h3>Condom</h3>
        <p>Use Every Time</p>
      </button>
      <button className={styles.internalCondom}>
        <h3>Internal Condom</h3>
        <p>Use Every Time</p>
      </button>
      <button className={styles.diaphragm}>
        <h3>Diaphragm</h3>
        <p>Use Every Time</p>
      </button>
      <button className={styles.sponge}>
        <h3>Birth Control Sponge</h3>
        <p>Use Every Time</p>
      </button>
      <button className={styles.spermicide}>
        <h3>Spermicide &amp; Gel</h3>
        <p>Use Every Time</p>
      </button>
      <button className={styles.cervicalCap}>
        <h3>Cervical Cap</h3>
        <p>Use Every Time</p>
      </button>
      <button className={styles.fertilityAwareness}>
        <h3>Fertility Awareness</h3>
        <p>Use Constantely</p>
      </button>
      <button className={styles.withdrawal}>
        <h3>Withdrawal (Pull Out Method)</h3>
        <p>Use Every Time</p>
      </button>
      <button className={styles.breastfeeding}>
        <h3>Breastfeeding as Birth Control</h3>
        <p>Every 4-5 hours</p>
      </button>
      <button className={styles.abstinence}>
        <h3>Outercourse &amp; Abstinence</h3>
        <p>Use Every Time</p>
      </button>
      <button className={styles.sterilization}>
        <h3>Sterilization</h3>
        <p>Lasts for Life</p>
      </button>
      <button className={styles.vasectomy}>
        <h3>Vasectomy</h3>
        <p>Lasts for Life</p>
      </button>
      <button className={styles.nothing}>
        <h3>No Method</h3>
        <p>Not very effective...</p>
      </button>
    </div>
  );
}
