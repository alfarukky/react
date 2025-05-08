function ReactHookForm() {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        {/* <input ref={nameRef} id="name" type="text" className="form-control" /> */}
        <input id="name" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age:
        </label>
        {/* <input ref={ageRef} id="age" type="number" className="form-control" /> */}
        <input id="age" type="number" className="form-control" />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
}

export default ReactHookForm;
