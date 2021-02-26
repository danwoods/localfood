import Autocomplete from '@material-ui/lab/Autocomplete'
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import restaurants from '../restaurants.json'
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng
} from 'use-places-autocomplete'
import { Create } from '../components/Create.js'
import { EmailLink } from '../components/EmailLink.js'
import { RestaurantListItem } from '../components/RestaurantListItem.js'
import { makeStyles } from '@material-ui/core/styles'
import { useState } from 'react'

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 960,
    margin: '0px auto'
  },
  header: {
    textAlign: 'center',
    paddingBottom: 16
  },
  pickupOrDelievery: {
    display: 'flex',
    justifyContent: 'space-around',
    margin: 'auto',
    width: '60%'
  },
  feedbackSection: {
    display: 'flex',
    justifyContent: 'center'
  }
})

function App() {
  const classes = useStyles()

  const [isCreateDialogOpen, setCreateDialogOpen] = useState(false)
  const {
    ready,
    value: addressValue,
    suggestions: { status, data },
    setValue: setAddressValue,
    clearSuggestions: clearAddressSuggestions
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here */
    },
    debounce: 300
  })

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <Typography variant="h1" gutterBottom>
          {'Local Food'}
        </Typography>
        <Typography variant="h4">
          {'Local delivery. Zero fees. Powered by community.'}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {'(Denver Only)'}
        </Typography>
      </header>
      {/*
      <section className={classes.search} style={{ marginBottom: 32 }}>
        <Autocomplete
          popupIcon={null}
          id="combo-box-demo"
          options={data}
          getOptionLabel={(option) => option.description}
          fullWidth={true}
          onInputChange={(e, val) => setAddressValue(val)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Delivery Address"
              variant="outlined"
            />
          )}
        />
      </section>
      <section className={classes.search}>
        <TextField
          id="filled-basic"
          label="Search"
          variant="filled"
          fullWidth={true}
        />
      </section>
      <section>
        <FormGroup
          aria-label="pickup or delivery"
          row
          className={classes.pickupOrDelievery}
        >
          <FormControlLabel
            value={'DELIVERY'}
            control={<Checkbox color="primary" />}
            label={'Delivery'}
            labelPlacement={'end'}
          />
          <FormControlLabel
            value={'PICKUP'}
            control={<Checkbox color="primary" />}
            label="Pickup"
            labelPlacement="end"
          />
        </FormGroup>
      </section>
			*/}
      <section>
        <List className={classes.list}>
          {restaurants.map((r) => (
            <ListItem key={r.id}>
              <RestaurantListItem {...r} />
            </ListItem>
          ))}
        </List>
      </section>
      <section className={classes.feedbackSection}>
        <EmailLink emailAddress={'support@localfood.page'} title={'Mail'}>
          <Button variant={'contained'} disableElevation>
            {'Feedback / Suggest New Restaurant'}
          </Button>
        </EmailLink>
      </section>
      {/*
      <Button onClick={() => setCreateDialogOpen(true)}>
        {'Add Restaurant'}
      </Button>
			*/}
      <Dialog
        onClose={() => setCreateDialogOpen(false)}
        aria-labelledby="simple-dialog-title"
        open={isCreateDialogOpen}
      >
        <DialogTitle id="simple-dialog-title">{'Add Restaurant'}</DialogTitle>
        <DialogContent>
          <Create />
        </DialogContent>
        <DialogActions>
          <Button>{'Submit'}</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default App
