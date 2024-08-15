import styles from "@styles/movie-provider.module.css";
import { API_URL } from "app/constants";
import Link from "next/link";

async function getProvider(id: string) {
  const res = await fetch(`${API_URL}/${id}/providers`);
  return res.json();
}

function ProviderItem({ category, channels }: { category: string; channels: { logo_path: string }[] }) {
  if (!channels.length) return null;

  const imgUrl = "https://image.tmdb.org/t/p/w300";

  return (
    <div className={styles["provider-item"]}>
      <span className={styles["provider-category"]}>
        {category === "flatrate" ? "stream" : category}
      </span>
      {channels.map((channel, idx) => (
        <img
          key={idx}
          className={styles["provider-channel"]}
          src={`${imgUrl}${channel.logo_path}`}
          alt="Provider logo"
        />
      ))}
    </div>
  );
}

export default async function MovieProvider({ id }: { id: string }) {
  const providers = await getProvider(id);
  const { link = "", buy = [], rent = [], flatrate = [] } = providers.US || {};
  const providerData = { buy, rent, flatrate };

  return (
    <div className={styles.container}>
      {link && (
        <Link href={link} className={styles["provider-link"]} target={"_blank"}>
          <div className={styles["provider-container"]}>
            {Object.entries(providerData).map(([key, value]) =>
              <ProviderItem key={key} category={key} channels={value} />
            )}
          </div>
        </Link>
      )}
    </div>
  );
}
