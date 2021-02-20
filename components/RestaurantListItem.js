import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'

/** Tracking */
let clientTrack = null

/** Tracking function
 * @param {object} trackData - Data to track
 * @param {string} trackData.name - Name
 * @param {string} trackData.unit - Unit
 * @param {string} trackData.value - Value
 */
const track = async (trackData) => {
  if (!clientTrack) {
    clientTrack = await import('../util/tracking.js').then((mod) => mod.track)
  }

  clientTrack(trackData)
}

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
  id,
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
      onMouseEnter={() =>
        track({ name: 'INTERACTION', value: id, unit: 'MOUSE_ENTER' })
      }
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
          <a
            target={'_blank'}
            href={websiteUrl}
            className={classes.link}
            itemProp="url"
            onMouseDown={() =>
              track({
                name: 'INTERACTION',
                value: id,
                unit: 'MOUSEDOWN:WEBSITE'
              })
            }
          >
            {'Website'}
          </a>
          {phone ? (
            <Fragment>
              {'|'}
              <a
                href={`tel:${phone}`}
                className={classes.link}
                itemProp={'telephone'}
                onMouseDown={() =>
                  track({
                    name: 'INTERACTION',
                    value: id,
                    unit: 'MOUSEDOWN:PHONE'
                  })
                }
              >
                {phone}
              </a>
            </Fragment>
          ) : null}
          {menuUrl ? (
            <Fragment>
              {'|'}
              <a
                target={'_blank'}
                href={menuUrl}
                className={classes.link}
                itemProp={'menu'}
                onMouseDown={() =>
                  track({
                    name: 'INTERACTION',
                    value: id,
                    unit: 'MOUSEDOWN:MENU'
                  })
                }
              >
                {'Menu'}
              </a>
            </Fragment>
          ) : null}
          {orderUrl ? (
            <Fragment>
              {'|'}
              <a
                target={'_blank'}
                href={orderUrl}
                className={classes.link}
                onMouseDown={() =>
                  track({
                    name: 'INTERACTION',
                    value: id,
                    unit: 'MOUSEDOWN:ORDER'
                  })
                }
              >
                {'Order Now'}
              </a>
            </Fragment>
          ) : null}
        </div>
      </div>
    </Card>
  )
}
