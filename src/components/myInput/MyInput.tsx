import './myInput.css'


interface IMyInputProps{
    label: string
    type: string
    name: string
    placeholder: string;

}

export default function MyInput({label,type,name,placeholder}:IMyInputProps) {
  
    return(
        <>
        <label className='label'>{label}</label>
        <input type={type} name ={name}placeholder={placeholder}/>
        </>
    )
}