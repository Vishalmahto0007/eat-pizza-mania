import styles from "./ClientBanner.module.css";

interface BannerData {
  id: number;
  bnVal: number;
  bnSpec: string;
}

const Clients = () => {
  const bannarData: BannerData[] = [
    { id: 1, bnVal: 120, bnSpec: "Awesome Employees" },
    { id: 2, bnVal: 58, bnSpec: "Pizza Types" },
    { id: 3, bnVal: 14868, bnSpec: "Satisfied Clients" },
    { id: 4, bnVal: 2031, bnSpec: "Deliveries" },
  ];

  return (
    <div className={styles.clients}>
      <div className={styles.overlay}>
        <div className={styles.container}>
          <div className={`${styles.row} ${styles.cl}`}>
            {bannarData.map((data) => (
              <div className={styles["col-3"]} key={data.id}>
                <div className={styles.client}>
                  <h1>{data.bnVal}</h1>
                  <p>{data.bnSpec}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
