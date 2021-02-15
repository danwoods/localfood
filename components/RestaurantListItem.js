import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useListItemCardStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%'
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flex: '1 0 auto'
  },
  cover: {
    backgroundSize: 'contain',
    margin: '8px 0',
    width: 151
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  link: {
    margin: '0 4px'
  },
  playIcon: {
    height: 38,
    width: 38
  }
}))

export const RestaurantListItem = ({
  name,
  cuisine,
  logoUrl,
  menuUrl,
  orderUrl,
  websiteUrl,
  phone
}) => {
  const classes = useListItemCardStyles()

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={logoUrl}
        title={`${name} logo`}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {`${cuisine}`}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <a href={websiteUrl} className={classes.link}>
            {'Website'}
          </a>
          |
          <a href={`tel:${phone}`} className={classes.link}>
            {phone}
          </a>
          |
          <a href={menuUrl} className={classes.link}>
            {'Menu'}
          </a>
          |
          <a href={orderUrl} className={classes.link}>
            {'Order Now'}
          </a>
        </div>
      </div>
    </Card>
  )
}
