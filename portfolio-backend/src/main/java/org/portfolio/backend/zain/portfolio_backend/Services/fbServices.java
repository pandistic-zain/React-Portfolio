package org.portfolio.backend.zain.portfolio_backend.Services;

import java.util.List;

import org.portfolio.backend.zain.portfolio_backend.Controller.Feedback;

public interface fbServices {
    List<Feedback> GetFeedback();
    String postFeedback(Feedback feedback);
}
