import { Button, createStyles } from '@mantine/core'
import { IconPlus } from '@tabler/icons'

interface AddButtonProps {
  onClick: () => void
}

const useStyles = createStyles(theme => ({
  button: {
    position: 'fixed',
    bottom: '40px',
    right: '40px',
  },
}))

export const AddButton: FC<AddButtonProps> = ({ onClick }) => {
  const { classes } = useStyles()
  return (
    <Button className={classes.button} variant="light" size="md" onClick={onClick}>
      <IconPlus size={24} />
    </Button>
  )
}
