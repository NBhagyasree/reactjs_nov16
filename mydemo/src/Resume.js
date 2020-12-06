import React from 'react';
import './bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import logo1 from './2.png';
import data from './data.json';
function Resume(){
    return(
        <div>
            <h1>Resume</h1>
    <div className="resume_left">
                 <div className="data"
                 style={{width:"18rem",textAlign:"right"}}>
                      <img src={logo1}/>
                     <h3>{data.name}</h3><br></br>
                     <h3>{data.email}</h3>
                     <h3>{data.address}</h3>
                    <h3>{data["Mobile no"]}</h3>
    <h3>{data["carrier objective"]}</h3>

                     </div>
                     </div>
                     <div className="resume_right">
                         <h5>Carrer objective</h5>
    <p>{data.carrier}</p>
                    
                     <h6 className='text-left'>Education :</h6>
                                    <table className='table'>
                                        <tr>
                                            <th>S.No</th>
                                            <th>School/College</th>
                                            <th>CGPA/PER</th>
                                            <th>Duration</th>
                                        </tr>
                                        <tr>
                                            <td>{data.EducationDetails[0].sno}</td>
                                            <td className='text-left'>{data.EducationDetails[0].institute}</td>
                                            <td>{data.EducationDetails[0].percentage}</td>
                                            <td>{data.EducationDetails[0].duration}</td>
                                        </tr>
                                        <tr>
                                            <td>{data.EducationDetails[1].sno}</td>
                                            <td className='text-left'>{data.EducationDetails[1].institute}</td>
                                            <td>{data.EducationDetails[1].percentage}</td>
                                            <td>{data.EducationDetails[1].duration}</td>
                                        </tr>
                                        <tr>
                                            <td>{data.EducationDetails[2].sno}</td>
                                            <td className='text-left'>{data.EducationDetails[2].institute}</td>
                                            <td>{data.EducationDetails[2].percentage}</td>
                                            <td>{data.EducationDetails[2].duration}</td>
                                        </tr>
                                        <h5>Professional skills</h5>
                                        <ul className='list-styled'>
                                            <li>
                                                {data.professionalskills}
                                            </li>
                                        </ul>
                                        <h5>Hobbies</h5>
                                        <ul className='list-styled'>
                                            <li>
                                                {data.Hobbies}
                                            </li>
                                        </ul>

                                        <h6 className='text-left'>Contact Details :</h6>
                                        <div>
                                            <p className='text-left'>{data.phn} </p>
                                            <p className='text-left'>{data.email} </p>
                                            <p className='text-left'>{data.street} </p>
                                            <p className='text-left'>{data.mandal} </p>
                                            <p className='text-left'>{data.dist} </p>
                                            <p className='text-left'>{data.state} </p>
                                            <p className='text-left'>{data.pincode} </p>
                                        </div>
                                    </table>
                     </div>
                     </div>
                )
                 }
export default Resume              

