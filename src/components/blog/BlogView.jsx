import { useParams } from "react-router-dom";
import Button from "../global/Button";
import styles from "./blogView.module.scss";

function BlogView() {
  const { id } = useParams();

  return (
    <section className={styles.section}>
      <article className={styles.container}>
        <header className={styles.header}>
          <img
            className={styles.cover}
            src="/img/blog/blog-post.avif"
            alt="Chocoalte"
          />
          <div className={styles.headingBox}>
            <h2 className={styles.heading}>A better way of making chocolate</h2>
            <span className={styles.date}>05/10/2023</span>
          </div>
        </header>
        <div className={styles.box}>
          <p className={styles.text}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
            voluptatem dicta sunt, fugit laboriosam natus quasi inventore qui
            quos iure optio distinctio ducimus consectetur tenetur odio non
            magnam obcaecati amet! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Officiis hic quis inventore explicabo perspiciatis
            doloremque autem pariatur. Dolorum atque, quod debitis aspernatur
            eos sed natus, recusandae est, molestiae quo sit? Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Atque ea eos facere molestiae
            quam iste ducimus dolore nesciunt deleniti, harum autem quo officiis
            temporibus ab, voluptatem iure blanditiis tempora possimus? Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Ratione placeat
            consequatur rem neque reiciendis iusto dignissimos assumenda veniam
            id consectetur. Illo a quia dolorem quaerat alias natus ratione
            corporis enim. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Vel recusandae magni eos nam fugit, obcaecati voluptas.
            Cupiditate vitae ullam rerum delectus. Nisi vel minus eaque,
            repellat modi inventore quidem nesciunt. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Vero voluptates, culpa ullam fugit
            perferendis, consequatur modi dolor repellat minima libero natus
            odio inventore iusto officia optio quas provident, beatae quis?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit autem
            doloribus soluta cupiditate perferendis dolorum, amet eum molestias
            cum eaque at architecto. Excepturi tempora quasi, unde suscipit ex
            mollitia aperiam. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Mollitia culpa eum, in vitae architecto vel.
            Veniam earum illum, neque, sapiente laudantium aliquid voluptates
            reiciendis voluptate officia fugit a unde illo? Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Nulla minima debitis
            molestias. Dolor incidunt sunt magnam? Accusamus velit ad soluta
            rerum laudantium, molestiae doloribus, doloremque cum recusandae
            repellendus et nostrum. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Accusamus voluptates eaque libero amet
            consequatur, maiores ea, quaerat commodi reprehenderit quisquam
            tenetur cum atque est a id placeat vero numquam deserunt! Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Corporis totam
            itaque, hic maiores dolores corrupti nobis beatae sed maxime odio
            illo quae odit ratione, laudantium commodi molestias non eum quia.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
          <nav className={styles.nav}>
            <h3 className={styles.nav__heading}>
              Thanks for reading thi article!
            </h3>
            <div className={styles.btnBox}>
              <Button size="md" colorOnFocus="white" isLink={true}>
                Go back
              </Button>
              <Button size="md" colorOnFocus="yellow" isLink={true}>
                See next
              </Button>
            </div>
          </nav>
        </div>
      </article>
    </section>
  );
}

export default BlogView;
