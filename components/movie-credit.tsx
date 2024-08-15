import styles from '@styles/movie-credit.module.css';
import { API_URL } from "app/constants";

async function getCredit(id: string) {
  const res = await fetch(`${API_URL}/${id}/credits`);
  return res.json();
}

function CreditItem({ credit }: { credit: { name: string; profile_path: string } }) {
  const backgroundStyle = credit.profile_path
    ? { backgroundImage: `url(${credit.profile_path})` }
    : {};

  return (
    <div className={styles["credit-item"]}>
      <span className={styles["credit-name"]}>{credit.name}</span>
      <div className={styles["credit-img"]} style={backgroundStyle} />
    </div>
  );
}

export default async function MovieCredits({ id }: { id: string }) {
  const credits = await getCredit(id);

  return (
    <div className={styles.container}>
      <div className={styles["credit-container"]}>
        {credits.map((credit: { name: string; profile_path: string; }, idx: string) =>
          <CreditItem key={idx} credit={credit} />
        )}
      </div>
    </div>
  );
}