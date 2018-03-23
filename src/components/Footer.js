// import React, { Component, PropTypes } from "react";
// // import FilterLink from "../containers/FilterLink";

// export default class Footer extends Component {
//   renderFilter(filter, name) {
//     if (filter === this.props.filter) {
//       return name;
//     }

//     return (
//       <a
//         href="#"
//         onClick={e => {
//           e.preventDefault();
//           this.props.onFilterChange(filter);
//         }}
//       >
//         {name}
//       </a>
//     );
//   }

//   render() {
//     return (
//       <p>
//         Show: {this.renderFilter("SHOW_ALL", "ALL")}
//         {","}
//         {this.renderFilter("SHOW_ACTIVE", "Active")}
//         {","}
//         {this.renderFilter("SHOW_COMPLETED", "Completed")}
//       </p>
//     );
//   }
// }

// Footer.propTypes = {
//   onFilterChange: PropTypes.func.isRequired,
//   filter: PropTypes.oneOf(["SHOW_ALL", "SHOW_ACTIVE", "SHOW_COMPLETED"])
//     .isRequired
// };

// // const Footer = () => (
// //   <p>
// //     Show: <FilterLink filter="SHOW_ALL">ALL</FilterLink>
// //     {","}
// //     <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
// //     {","}
// //     <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
// //   </p>
// // );

// // export default Footer;

import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Footer extends Component {
  renderFilter(filter, name) {
    if (filter === this.props.filter) {
      return name;
    }

    return (
      <a
        href=""
        onClick={e => {
          e.preventDefault();
          this.props.onFilterChange(filter);
        }}
      >
        {name}
      </a>
    );
  }

  render() {
    return (
      <p>
        Show: {this.renderFilter("SHOW_ALL", "All")}
        {", "}
        {this.renderFilter("SHOW_COMPLETED", "Completed")}
        {", "}
        {this.renderFilter("SHOW_ACTIVE", "Active")}
        .
      </p>
    );
  }
}

Footer.PropTypes = {
  onFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.oneOf(["SHOW_ALL", "SHOW_COMPLETED", "SHOW_ACTIVE"])
    .isRequired
};
