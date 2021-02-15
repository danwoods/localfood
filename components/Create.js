import TextField from '@material-ui/core/TextField'
import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Autocomplete, {
  createFilterOptions
} from '@material-ui/lab/Autocomplete'
import cuisines from '../cuisines.json'

const filter = createFilterOptions()

/*
const cuisines = [
  { title: 'Bakery' },
  { title: 'Barbeque' },
  { title: 'Breakfast' },
  { title: 'Chinese' },
  { title: 'Coffee' },
  { title: 'Ethiopian' },
  { title: 'French' },
  { title: 'Hamburgers' },
  { title: 'Italian' },
  { title: 'Japanese' },
  { title: 'Mexican' },
  { title: 'Sandwiches' },
  { title: 'Seafood' },
  { title: 'Southern' },
  { title: 'Spanish' },
  { title: 'Wings' }
]
*/

const CuisineSelect = (props) => {
  const [value, setValue] = useState(null)

  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        if (typeof newValue === 'string') {
          setValue({
            title: newValue
          })
        } else if (newValue && newValue.inputValue) {
          // Create a new value from the user input
          setValue({
            title: newValue.inputValue
          })
        } else {
          setValue(newValue)
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params)

        // Suggest the creation of a new value
        if (params.inputValue !== '') {
          filtered.push({
            inputValue: params.inputValue,
            title: `Suggest "${params.inputValue}"`
          })
        }

        return filtered
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="free-solo-with-text-demo"
      options={cuisines}
      getOptionLabel={(option) => {
        // Value selected with enter, right from the input
        if (typeof option === 'string') {
          return option
        }
        // Add "xxx" option created dynamically
        if (option.inputValue) {
          return option.inputValue
        }
        // Regular option
        return option.title
      }}
      renderOption={(option) => option.title}
      style={{ width: 300 }}
      freeSolo
      renderInput={(params) => (
        <TextField {...params} label="Cuisines" variant="outlined" />
      )}
    />
  )
}

const useHourStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  dayName: {
    marginRight: 8
  }
})

const Hours = (props) => {
  const classes = useHourStyles()
  return (
    <div className={classes.root}>
      <Typography className={classes.dayName}>{props.dayName}</Typography>
      <TextField required name={'hours-monday-open'} type={'time'} />
      <Typography>{'until'}</Typography>
      <TextField required name={'hours-monday-close'} type={'time'} />
    </div>
  )
}

export const Create = (props) => {
  return (
    <form>
      <Paper style={{ padding: 8, margin: '8px 0' }}>
        <TextField required name={'name'} label="Restaurant Name" />
        <TextField required name={'address'} label="Address" />
        <TextField required name={'email'} label="Email" type={'email'} />
        <TextField required name={'phone'} label="Phone" type={'tel'} />
      </Paper>
      <Paper
        style={{
          padding: 8,
          margin: '8px 0',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <TextField
          fullWidth={true}
          required
          name={'description'}
          label="Description"
          multiline
          rows={4}
        />
        <div style={{ display: 'flex' }}>
          <div>
            <CuisineSelect />
          </div>
          <div>
            <div>{'Hours'}</div>
            <div>
              <Hours dayName={'Monday'} />
              <Hours dayName={'Tuesday'} />
              <Hours dayName={'Wednesday'} />
              <Hours dayName={'Thursday'} />
              <Hours dayName={'Friday'} />
              <Hours dayName={'Saturday'} />
              <Hours dayName={'Sunday'} />
            </div>
          </div>
        </div>
      </Paper>
      <Paper style={{ padding: 8, margin: '8px 0' }}>
        <TextField required name={'logo'} label={'Logo'} />
        <TextField required name={'website'} label={'Website'} />
        <TextField required name={'menu'} label={'Menu'} />
        <TextField required name={'order'} label={'Order'} />
      </Paper>
    </form>
  )
}

export default Create
