import React from 'react'
import Layout from '../../../Layout'
import Header from '../../../Header'
import Footer from '../../../Footer'
import Sidebar from '../../../Sidebar/Sidebar'
import LabTechFullBld from '../../../Lab Forms/LabTechFullBld'
import { nurseMenuItems } from '../../../Sidebar/menuItem'
import { Grid, makeStyles } from '@material-ui/core'
import PageviewIcon from '@material-ui/icons/Pageview'
import { useHistory } from 'react-router-dom'
import LineStatCard from '../../../StatCard/LineStatCard'
import Register from '../../../Register'
import PieStatCard from '../../../StatCard/PieStatCard'
import BarStatCard from '../../../StatCard/BarStatCard'
import { Button } from '@material-ui/core'
import { TextField } from '@material-ui/core'

const useStyles = makeStyles({
  dataCard: {
    backgroundColor: '#fff',
    borderRadius: '5px',
    margin: '20px',
    marginBottom: '0px',
  },
  root: {
    padding: 0,
  },

  search_items: {
    maxHeight: '50px',
    margin: '10px',
    backgroundColor: '#fff',
  },

})

function AddLabTest() {
  return (
    <Layout
      header={<Header user='Ms. Asanaka Perera' />}
      sidebar={<Sidebar menuItems={nurseMenuItems} />}
      footer={<Footer />}
      content={
        <div style={{ padding: '20px', backgroundColor: '#ebf5f7' }}>
          <Content />
        </div>
      }
    ></Layout>
  )
}

function Content() {
  const classes = useStyles()
  return (
    <Grid container style={{ padding: '20px' }} spacing={5}>
      
      
      
      <Grid className={classes.dataCard} item sm={12}>
      <h3 style={{ color: '#000000' }} align='center'>Add Lab Test</h3>  
      <Grid className={classes.grid} container justify='space-around'>
          <Grid item sm></Grid>
          <Grid
            item
            alignContent='center'
            style={{ backgroundColor: '#3f51b5', borderRadius: '5px' }}
          >
            
          </Grid>
        </Grid>
        <LabTechFullBld />
      </Grid>       
    </Grid>
   
  )
}


export default AddLabTest