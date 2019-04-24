import React from "react";
import FormButton from "./FormButton";
import FormInput from "./FormInput";

export default class InlineMapForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      locationA: "",
      locationB: ""
    };
  }

  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { formSubmit } = this.props;
    formSubmit(this.state.locationA, this.state.locationB);
  };

  render() {
    return (
      <div className="bg-dark">
        <form
          onSubmit={this.handleSubmit}
          className="form-inline d-flex justify-content-center"
        >
          <div className="form-group my-2 ">
            <div className="form-group mx-3">
              <label className="text-light">Find a MidPoint</label>
            </div>
            <div className="form-group mx-3">
              <FormInput
                name="locationA"
                placeholder="First Location"
                value={this.state.locationA}
                handleChange={this.handleChange}
              />
            </div>
            <div className="form-group mx-3">
              <FormInput
                name="locationB"
                placeholder="Second Location"
                value={this.state.locationB}
                handleChange={this.handleChange}
              />
            </div>
            <FormButton name="submit" />
          </div>
        </form>
      </div>
    );
  }
}
