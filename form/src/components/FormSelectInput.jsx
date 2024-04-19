export default function FormSelectInput({selectId,selectLabel,selectName,options,selectClassName,inputError,handleChange}){
    return <div className={selectClassName}>
        <label htmlFor={selectId}>{selectLabel}</label>
        <select name={selectName} id={selectId} onChange={handleChange}>
            <option value=''>--Please Choose an option--</option>
            {
                options && options.map((option,ind) => <option key={ind} value={option}>{option}</option>)
            }
        </select>
        { inputError && <p className="error">{inputError[selectName]} </p>}
    </div>
}