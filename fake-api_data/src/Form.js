import React,{useState} from 'react'
import {Grid,Paper,Box,FormControl,InputLabel,Select,MenuItem,TextField,Chip} from "@material-ui/core"
import {options,dataTemplate} from "./DATA/options" 
import {makeStyles} from "@material-ui/core/styles"
import faker from "faker"
import download from "downloadjs";
//First we convert it into Array---->Bcoz we cannot perform map() on object
const categories = Object.keys(options)
const useStyles = makeStyles(theme => ({
    FormControl:{minWidth:"100%",},
    chips :{display:"flex",flexWrap:"wrap"},
    chip : {margin:3}
}))


const Form = (props) => {
    const [data,setData] = useState(dataTemplate);
    const [numberOfData,setNumberOfData] = useState(1);
    const classes = useStyles()

    const handleChange = (e) =>{
        let copyData = {...data}
        copyData[e.target.name]={}
        e.target.value.forEach((item) => {
            copyData[e.target.name][item] = "xyx";
        })
        setData(copyData)
    };

    const generateData = () => {
        let copyData = JSON.parse(JSON.stringify(options));
        let arrData=[];
        for(let i=0 ; i<numberOfData ; i++){
            for(let category of categories){
                for(let key of Object.keys(options[category])){
                    if(data[category][key] !== undefined){
                        copyData[category][key] = faker[category][key]()
                    }
                }
            }
            arrData.push(copyData)
            copyData = JSON.parse(JSON.stringify(options))
        }
        download(JSON.stringify(arrData),"fake_api_data.json","json");
        setNumberOfData(1)
        setData(dataTemplate)
    }
    
    return (
        <>
        <Grid  container spacing={2} >
            {
                categories.map(category => (
                    <Grid item sm={3} key={category}>
                        <Paper component={Box} p={3}>
                            <FormControl className={classes.FormControl}>
                                <InputLabel>{category}</InputLabel>
                                <Select fullWidth multiple value={Object.keys(data[category])} 
                                        name={category} onChange={handleChange}
                                        renderValue={(selected)=>(
                                            <div className={classes.chips}>{
                                                selected.map((value) => (
                                                    <Chip key={value} label={value} className={classes.chip}/>
                                                ))                                            
                                                }</div>
                                            )}>
                                {
                                    Object.keys(options[category]).map((name) => (
                                        <MenuItem key={name} value={name}>{name}</MenuItem>
                                    ))
                                }
                                </Select>
                            </FormControl>
                        </Paper>
                    </Grid>
                ))
            }             
        </Grid>
        <Paper component={Box} my={1} p={3}>
            <TextField fullWidth variant="outlined" 
            label="Enter the number to generate the fake data"
            placeholder="Enter the Number"
            value={numberOfData} onChange={(e)=> setNumberOfData(e.target.value)}
            />
        </Paper>
        <button type="button" className="btn btn-primary" variant="contained"
        onClick={generateData}>Generate Data</button>
        </>
    )
}

export default Form
