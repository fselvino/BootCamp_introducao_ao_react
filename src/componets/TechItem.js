import React from "react";
import PropType from "prop-types";

function TechItem({ tech, onDelete }) {
  return (
    <li>
      {tech}
      <button onClick={onDelete} type="button">
        Remover
      </button>
    </li>
  );
}
TechItem.defaultProps = {
  tech: "Oculto"
};
TechItem.propTypes = {
  tech: PropType.string,
  onDelete: PropType.func.isRequired
};
export default TechItem;
