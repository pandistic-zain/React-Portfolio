package org.portfolio.backend.zain.portfolio_backend.Controller;

import java.util.List;
import org.portfolio.backend.zain.portfolio_backend.Services.fbServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:3000")
public class FeedbackController {

    @Autowired
    private fbServices fbService;

    @GetMapping("/letsconnect")
    public List<Feedback> getAllFeedbacks() {
        return fbService.GetFeedback();
    }

    @PostMapping("/letsconnect")
    public String postFeedback(@RequestBody Feedback fb) {
        return fbService.postFeedback(fb);
    }
}
