import React from 'react';
import './TableComponent.css'
import Toggle from './Toggle/Toggle'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';


const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function createData(name, access, members, update, toggle, price) {
  return {
    name,
    access,
    members,
    update,
    toggle,
    price,
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const [state, setState] = React.useState({
    gilad: false,
    jason: true,
    antoine: false,
    Delete:false
  });
  const { gilad, jason, antoine,Delete } = state;

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <RemoveCircleOutlineIcon /> : <AddCircleOutlineIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="center" className= {`${row.access}`}><h4>{row.access}</h4></TableCell>
        <TableCell align="center">{row.members}</TableCell>
        <TableCell align="center">{row.update}</TableCell>
        <TableCell align="center">{row.toggle}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box >
              <div className='box'>
                <Typography variant='p'>All aspects of this module</Typography>
                <div  className='div-box'>
                  <div className='div-box1'>
                    <FormControl component="fieldset">
                      <h3 >Access Control</h3>
                      <RadioGroup aria-label="gender"  name="gender1" value={value} onChange={handleChange}>
                        <FormControlLabel value="All Access"  control={<Radio color='primary'/>} label="All Access" />
                        <FormControlLabel value="Restricted Access" control={<Radio color='primary' />} label="Restricted Access" />
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <div className='Separator'></div>
                  <div className='div-box2'>
                    <FormControl component="fieldset" className={classes.formControl}>
                    <h3 >Permissions</h3>
                      <FormGroup>
                        <FormControlLabel
                          control={<Checkbox color='primary' checked={gilad} onChange={handleChange} name="gilad" />}
                          label="View items in access"
                        />
                        <FormControlLabel
                          control={<Checkbox color='primary' checked={jason} onChange={handleChange} name="jason" />}
                          label="Edit items in access"
                        />
                        <FormControlLabel
                          control={<Checkbox color='primary' checked={antoine} onChange={handleChange} name="antoine" />}
                          label="Create items in access"
                        />
                        <FormControlLabel
                          control={<Checkbox color='primary' checked={Delete} onChange={handleChange} name="Delete" />}
                          label="Delete items in access"
                        />
                        </FormGroup>
                      </FormControl>
                  </div>
                </div>
              </div>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    access: PropTypes.number.isRequired,
    update: PropTypes.number.isRequired,
    members: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    toggle: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData('Budget','All Access',
  <ul className="summary__list">
    <li>View</li>
    <div className="separator"></div>
    <li>Create</li>
    <div className="separator"></div>
    <li>Edit</li>
    <div className="separator"></div>
    <li>Delete</li>
  </ul>
    ,"1 min ago",<Toggle/>),
  createData('Bidding', "No Access","-", "1 min ago", <Toggle/>),
  createData('Vendor Portal', "Restricted Access",
  <ul className="summary__list">
    <li>View</li>
    <div className="separator"></div>
    <li>Create</li>
  </ul>
  , "1 min ago",<Toggle/>),
  createData('Purchase Order/ Work Order',"Restricted Access",
  <ul className="summary__list">
    <li>View</li>
    <div className="separator"></div>
    <li>Create</li>
  </ul>
  , "1 min ago", <Toggle/>),
  createData('Organisational Profile',  "All Access",
  <ul className="summary__list">
    <li>View</li>
    <div className="separator"></div>
    <li>Create</li>
    <div className="separator"></div>
    <li>Edit</li>
    <div className="separator"></div>
    <li>Delete</li>
  </ul>
  ,"1 min ago",<Toggle/>),
  createData('Permission & Access Control',"No Access","-", "1 min ago", <Toggle/>)
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead style={{backgroundColor:"#f2f2f2"}}>
          <TableRow>
            <TableCell />
            <TableCell align="left">Department/Role name</TableCell>
            <TableCell align="center">Access Level</TableCell>
              <TableCell align="center">Summary</TableCell>
              <TableCell align="center">Last updated</TableCell>
              <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}