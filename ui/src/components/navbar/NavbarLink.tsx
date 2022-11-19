import { createStyles, Tooltip, UnstyledButton } from '@mantine/core'
import { TablerIcon } from '@tabler/icons'
import { Link } from 'react-router-dom'

interface NavbarButtonProps {
  icon: TablerIcon
  label: string
  active?: boolean
  onClick?: () => void
}

interface NavbarLinkProps extends NavbarButtonProps {
  target: string
}

const useStyles = createStyles(theme => ({
  link: {
    width: 50,
    height: 50,
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
    },
  },

  active: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}))

export const NavbarLink: FC<NavbarLinkProps> = ({ icon, label, target, active, onClick }) => {
  return (
    <Link to={target}>
      <NavbarButton {...{ icon, label, active, onClick }} />
    </Link>
  )
}

export const NavbarButton: FC<NavbarButtonProps> = ({ icon: Icon, label, active, onClick }) => {
  const { classes, cx } = useStyles()
  return (
    <div onClick={onClick}>
      <Tooltip label={label} position="right" transitionDuration={0}>
        <UnstyledButton className={cx(classes.link, { [classes.active]: active })}>
          <Icon stroke={1.5} />
        </UnstyledButton>
      </Tooltip>
    </div>
  )
}
