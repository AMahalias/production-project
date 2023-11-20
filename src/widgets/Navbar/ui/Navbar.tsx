import { classNames } from 'shared/lib/classNames/classNames'
import classes from './Navbar.module.scss'
import { Modal } from 'shared/ui/Modal/Modal'
import { useTranslation } from 'react-i18next'
import { useCallback, useState } from 'react'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggle = useCallback(() => {
    setIsAuthModal(prevState => !prevState);
  }, []);

  return (
    <div className={classNames(classes.Navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={classes.links}
        onClick={onToggle}
      >
        {t('Login')}
      </Button>
      <Modal
        isOpen={isAuthModal}
        onClose={onToggle}
      >
        {/* eslint-disable-next-line i18next/no-literal-string */}
        {/* eslint-disable-next-line i18next/no-literal-string */}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa cumque delectus
        esse impedit molestiae sapiente sint. Asperiores in rerum veniam!
      </Modal>
    </div>
  );
};
