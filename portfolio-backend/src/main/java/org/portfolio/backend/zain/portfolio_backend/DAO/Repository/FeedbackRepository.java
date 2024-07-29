package org.portfolio.backend.zain.portfolio_backend.DAO.Repository;

import org.portfolio.backend.zain.portfolio_backend.DAO.Entity.FeedbackEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FeedbackRepository extends JpaRepository<FeedbackEntity,Long>{
    
}
