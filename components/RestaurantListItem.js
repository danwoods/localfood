import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'

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
    margin: '8px 0 8px 8px',
    width: theme.spacing(19),
    height: theme.spacing(14)
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
    <Card
      classes={{ root: classes.root }}
      itemScope
      itemType={'https://schema.org/Restaurant'}
    >
      <CardMedia
        itemProp={'image'}
        className={classes.cover}
        image={logoUrl}
        component={'img'}
        title={`${name} logo`}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5" itemProp="name">
            {name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            itemProp="servesCuisine"
          >
            {`${cuisine}`}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <a href={websiteUrl} className={classes.link} itemProp="url">
            {'Website'}
          </a>
          {phone ? (
            <Fragment>
              {'|'}
              <a
                href={`tel:${phone}`}
                className={classes.link}
                itemProp={'telephone'}
              >
                {phone}
              </a>
            </Fragment>
          ) : null}
          {menuUrl ? (
            <Fragment>
              {'|'}
              <a href={menuUrl} className={classes.link} itemProp={'menu'}>
                {'Menu'}
              </a>
            </Fragment>
          ) : null}
          {orderUrl ? (
            <Fragment>
              {'|'}
              <a href={orderUrl} className={classes.link}>
                {'Order Now'}
              </a>
            </Fragment>
          ) : null}
        </div>
      </div>
    </Card>
  )
}
