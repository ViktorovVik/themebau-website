import { Link } from 'react-router';
import styles from './Footer.module.scss';
import cn from 'clsx';
import { Logo } from '@/shared/ui';
import { Button, Socials } from '@/shared/ui';
import { FOOTER_LINKS } from './config/footer.data';
import deco from '@/shared/assets/deco/2.svg';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={cn(styles.inner, 'container')}>
        <img
          className={styles.deco}
          src={deco}
          alt=""
          width={641}
          height={641}
          aria-hidden="true"
        />
        <div className={styles.leftCol}>
          <Logo className={styles.footerLogo} />
          <p className={styles.text}>
            Be saying moveth spirit fruitful called set evening fly give shall
            moveth lesser very.
          </p>
          <div className={styles.contacts}>
            <a href="tel:+442071128285">+44 207 112 82 85</a>
            <a href="mailto:hello@themebau.com">hello@themebau.com</a>
          </div>
          <Socials />
        </div>
        <div className={styles.rightCol}>
          <form className={styles.form} action="" method="POST">
            <label className={styles.label} htmlFor="newsletter-email">
              subscribe of newsletter
            </label>
            <div className={styles.formControls}>
              <input
                className={styles.input}
                type="email"
                id="newsletter-email"
                name="subscription"
                required
                placeholder="example@mail.com"
              />
              <Button
                type="submit"
                variant="transparent"
                className={styles.send}
              >
                send
              </Button>
            </div>
          </form>
          <nav className={styles.navColumns} aria-label="Footer">
            {FOOTER_LINKS.map((column) => (
              <div key={column.id}>
                <h3 className={cn(styles.navTitle, 'h6')}>{column.title}</h3>
                <ul className={styles.navList}>
                  {column.links.map(({ label, to }) => (
                    <li className={styles.item} key={label}>
                      <Link to={to}>{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
          <small className={styles.privacyPolicy}>© 2020 - RunWebRun.</small>
        </div>
      </div>
    </footer>
  );
};
