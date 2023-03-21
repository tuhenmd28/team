import React, { useState } from 'react'
import male from "./../images/maleProfile.jpg"
import female from "./../images/femaleProfile.jpg"
export default function Body(props) {
    const [employees,setEmploye] = useState([{
        id: 1,
        fullName: "Bob Jones",
        designation: "JavaScript Developer",
        gender: "male",
        teamName: "TeamA"
      },
      {
        id: 2,
        fullName: "Jill Bailey",
        designation: "Node Developer",
        gender: "female",
        teamName: "TeamA"
      },
      {
        id: 3,
        fullName: "Gail Shepherd",
        designation: "Java Developer",
        gender: "female",
        teamName: "TeamA"
      },
      {
        id: 4,
        fullName: "Sam Reynolds",
        designation: "React Developer",
        gender: "male",
        teamName: "TeamB"
      },
      {
        id: 5,
        fullName: "David Henry",
        designation: "DotNet Developer",
        gender: "male",
        teamName: "TeamB"
      },
      {
        id: 6,
        fullName: "Sarah Blake",
        designation: "SQL Server DBA",
        gender: "female",
        teamName: "TeamB"
      },
      {
        id: 7,
        fullName: "James Bennet",
        designation: "Angular Developer",
        gender: "male",
        teamName: "TeamC"
      },
      {
        id: 8,
        fullName: "Jessica Faye",
        designation: "API Developer",
        gender: "female",
        teamName: "TeamC"
      },
      {
        id: 9,
        fullName: "Lita Stone",
        designation: "C++ Developer",
        gender: "female",
        teamName: "TeamC"
      },
      {
        id: 10,
        fullName: "Daniel Young",
        designation: "Python Developer",
        gender: "male",
        teamName: "TeamD"
      },
      {
        id: 11,
        fullName: "Adrian Jacobs",
        designation: "Vue Developer",
        gender: "male",
        teamName: "TeamD"
      },
      {
        id: 12,
        fullName: "Devin Monroe",
        designation: "Graphic Designer",
        gender: "male",
        teamName: "TeamD"
      }]);
      const [selectedTeam,setTeam] = useState('TeamA');
      const selectTeamChange = (event)=>{
        setTeam(event.target.value);
      }
      const handelEmployeCardClick = (event)=>{
        const transformedEmployees = employees.map((employee) => employee.id === parseInt(event.currentTarget.id)
        ? employee.teamName === selectedTeam ? { ...employee, teamName: '' }
          : { ...employee, teamName: selectedTeam } : employee);
          console.log(transformedEmployees)
          setEmploye(transformedEmployees);
        
      }
  return (
    <>
      <div className={`container-fluid bg-${props.dark?"dark":"white"}`}>
        <div className="row justify-content-center">
            <div className="col-8">
                <div className="row justify-content-center ">
                    <div className="offset-md-1 col-8 my-4">
                        <select name="category" id="category " className='form-control' value={selectedTeam} onChange={selectTeamChange}>
                            <option value="TeamA">TeamA</option>
                            <option value="TeamB">TeamB</option>
                            <option value="TeamC">TeamC</option>
                            <option value="TeamD">TeamD</option>
                        </select>
                    </div>
                    {employees && employees.map((employe)=>(
                    <div style={{cursor:"pointer"}} className="col-4 pb-4" key={employe.id}>
                        <div id={employe.id} className={employe.teamName === selectedTeam?'card shadow1':'card'} onClick={handelEmployeCardClick}>
                            <img className="card-img-top" src={employe.gender === "male"?male:female} alt="" />
                            <div className="card-body">
                                <h4 className="card-title">{employe.fullName}</h4>
                            <p className="card-text">
                                {employe.designation}
                            </p>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </>
  )
}
