const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
    return (
        <div className='flex'>
            <div className='form-control'>
                <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""}`}>
                    <span className='label-text'>Male</span>
                    <input 
                        type='radio' 
                        name='gender' 
                        className='radio checked:bg-blue-500' 
                        checked={selectedGender === "male"}
                        onChange={() => onCheckboxChange("male")}
                    />
                </label>
            </div>
            <div className='form-control'>
                <label className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : ""}`}>
                    <span className='label-text'>Female</span>
                    <input 
                        type='radio' 
                        name='gender' 
                        className='radio checked:bg-pink-500' 
                        checked={selectedGender === "female"}
                        onChange={() => onCheckboxChange("female")}
                    />
                </label>
            </div>
        </div>
    );
};

export default GenderCheckbox;