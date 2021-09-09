import { Component } from "react";
import s from "./Searchbar.module.css";
// import { ImSearch } from "react-icons/im";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default class Searchbar extends Component {
  state = {
    searchQuery: "",
  };

  handleNameChange = (event) => {
    this.setState({ searchQuery: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.searchQuery.trim() === "") {
      toast.error("Error", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // alert("");
      return;
    }

    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: "" });
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.SearchFormInput}
            type="text"
            autoComplete="on"
            autoFocus
            placeholder="Search images and photos"
            // name="pokemonName"
            value={this.state.searchQuery}
            onChange={this.handleNameChange}
          />
        </form>
      </header>
    );
  }
}
