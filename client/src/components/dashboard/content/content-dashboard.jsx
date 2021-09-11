import React, {useState} from 'react';

import PageSelectionDashboard from '../page-selection/page-selection-dashboard';

const CarouselleDashboard = (props) => {
  const [currentPage, setCurrentPage] = useState(0);

  const SetCurrentPage = (id) => {
    setCurrentPage(id)
  }

  return(
    <div className="carouselle-dashboard">
      <PageSelectionDashboard hasCarouselle={false} currentPage={currentPage} setCurrentPage={SetCurrentPage} />
    </div>
  )
}

export default CarouselleDashboard;