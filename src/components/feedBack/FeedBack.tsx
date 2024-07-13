import './feedback.css'
import MyButton from '../myButton/MyButton'
import { useState } from 'react';


export default function FeedBack(){
   
        const [likes, setLikes] = useState<number>(0);
        const [disLikes, setDisLikes] = useState<number>(0);

        const handleLike = ():void => {
            setLikes ( likes => likes +1)
        }

        const handleDisLike = ():void => {
            setDisLikes ( disLikes => disLikes +1)
        }

        const handleReset = ():void => {
            setLikes(0);
           setDisLikes(0);
        };
        return(
            <div className='lesson-container'>
                <div>
     <span>{likes}</span>
    <MyButton type='button'  onClick ={handleLike} name={'Like'}/>
    <MyButton type='submit' onClick ={handleDisLike} name={'Dislike'}/>
    <span>{disLikes}</span>
    </div>
    <div>
    <MyButton type='reset' onClick ={handleReset} name={'Reset Results'}/>
    </div>

            </div>
    );
}