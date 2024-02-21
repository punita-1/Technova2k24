import React, { useState } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Passwordtoggle = () => {
    const [visi, setVisi] = useState(false);
    const [visible, setVisible] = useState(false);
    const [visiblility, setVisiblity] = useState(false);

    const SIcon = (<i className={`${visi?"fa-regular fa-eye":"fa-solid fa-eye-slash"}`}  onClick={() => setVisi(visi => !visi)}></i>

    );
    const Icon = (<i className={`${visible?"fa-regular fa-eye":"fa-solid fa-eye-slash"}`}  onClick={() => setVisible(visible => !visible)}></i>

    );
    const CIcon = (<i className={`${visiblility?"fa-regular fa-eye":"fa-solid fa-eye-slash"}`}  onClick={() => setVisiblity(visiblility => !visiblility)}></i>

    );

    const InputType1 = visi ? "text" : "password";
    const InputType2 = visible ? "text" : "password";
    const InputType3 = visiblility ? "text" : "password";

    return [InputType1,InputType2,InputType3,SIcon, Icon,CIcon];
};

export default Passwordtoggle;