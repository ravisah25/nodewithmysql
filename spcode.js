// CREATE DEFINER=`root`@`localhost` PROCEDURE `EmployeeAddOrEdit`(
//     IN _EmpID int,
//     IN _Name varchar(25),
//     IN _EmpCode varchar(25),
//     IN _Salary int
//     )
//     BEGIN
    
//     IF _EmpID = 0 then
//         INSERT into employee (Name, EmpCode, Salary)
//         values(_Name, _EmpCode, _Salary);
        
//         SET _EmpID = Last_Insert_Id();  
        
//     ELSE
//         update employee 
//         set
//         Name = _Name,
//         EmpCode = _EmpCode,
//         Salary = _Salary
//         where EmpID = _EmpID;
        
//     end if;   
//         Select _EmpID as 'EmpID';
//     END