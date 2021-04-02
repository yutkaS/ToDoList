import React from  'react';

 const Input = ({onChangeFunc}) => (
    <input onChange={onChangeFunc} type="text"/>
)
 export const CreateInput = React.memo(Input);