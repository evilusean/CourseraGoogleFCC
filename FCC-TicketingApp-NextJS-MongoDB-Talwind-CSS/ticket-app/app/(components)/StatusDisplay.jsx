const StatusDisplay = ({ status }) => {
  return (
    <span className="inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-700 bg-green-200">
      {status}
    </span>
  );
};

export default StatusDisplay;
