import PropTypes from 'prop-types';

const Tooltip = ({ tooltipText }) => {
  return <div className="tooltip">{tooltipText}</div>;
};

Tooltip.propTypes = {
  tooltipText: PropTypes.string,
}

export default Tooltip;
