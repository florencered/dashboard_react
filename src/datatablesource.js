export const userColumns=[
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field:"user",
        headerName:"User",
        width:230, 
        renderCell:(params)=>{
            return(
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar"/> 
                    {params.row.username}
                </div>
            )
        }
    },
    {
      field:"email" , 
      headerName:"Email",
      width:270,
    }, 
    {
        field:"age" , 
        headerName:"Age",
        width:150,
      }, 
      {
        field:"status" , 
        headerName:"Status",
        width:200, 
        renderCell:(params)=>{
            return(
                <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
            )
        }

      }, 

      
      


]
//dummy data equivalent to data fetched fro api 
export const userRows = [
    { id: 1, username: 'florencered', img: '/images/my_image.jpeg', status:"active", email:"example123@gmail.com",age: 35 },
    { id: 2, username: 'bhoomi', img: '/images/bhoomi1.png',status:"passive", email:"example123@gmail.com", age: 42 },
    { id: 3, username: 'renu', img: '/images/renu1.png', status:"pending", email:"example123@gmail.com",age: 45 },
    { id: 4, username: 'rithika', img: '/images/rithika1.png',status:"passive", email:"example123@gmail.com", age: 16 },
    { id: 5, username: 'kari', img: '/images/kari1.png', status:"pending", email:"example123@gmail.com",age: 20 },
    { id: 6, username: 'sangya', img: '/images/kavya1.png', status:"active", email:"example123@gmail.com",age: 150 },
    { id: 7, username: 'bhoomi_baby', img: '/images/bhoomi2.png', status:"passive", email:"example123@gmail.com",age: 44 },
    { id: 8, username: 'vaishu_darling', img: '/images/vaishu1.png', status:"active", email:"example123@gmail.com",age: 36 },
    { id: 9, username: 'kari_mommy', img: '/images/kari2.png', status:"pending", email:"example123@gmail.com",age: 65 },
  ]; 
  //1.me,2.bhoomika,3.renu,4.karishma,5.neh,6.kavya,7.sid,8.aryan,9.satabda