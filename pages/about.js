import Meta from '../components/Meta';
import styles from '../styles/About.module.css';

const about = () => {
  return (
    <div className={styles.aboutcontainer}>
      <Meta
        title="About"
        description="Testing out Next JS. We love web dev news."
      />
      <h1>About - Static Page</h1>
      <h3>Testing out Next JS framework.</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat neque
        repellendus ducimus totam labore laborum cumque dolore recusandae? Cum
        soluta hic quas amet modi, facilis error possimus. Eum a optio officia
        repellendus tenetur exercitationem pariatur recusandae, voluptas
        distinctio nobis nesciunt earum excepturi facilis labore, minus sit,
        dignissimos quisquam quam. Qui.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat neque
        repellendus ducimus totam labore laborum cumque dolore recusandae? Cum
        soluta hic quas amet modi, facilis error possimus. Eum a optio officia
        repellendus tenetur exercitationem pariatur recusandae, voluptas
        distinctio nobis nesciunt earum excepturi facilis labore, minus sit,
        dignissimos quisquam quam. Qui.
      </p>
    </div>
  );
};

export default about;
