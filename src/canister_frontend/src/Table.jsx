function Table() {


return (
	<div className='parent'>
	<div><input placeholder='Course' required></input></div>
	<div><select name="grade" id="grade" placeholder="Grade" title="grade">
	  <option value="5">A</option>
	  <option value="4">B</option>
	  <option value="3">C</option>
	  <option value="2">D</option>
	  <option value="0">F</option>
	  </select></div>
	<div><input type="number" name="units" id="units" min={0} max={6} placeholder="Units" required /></div>
  </div>
);

}

export default Table;