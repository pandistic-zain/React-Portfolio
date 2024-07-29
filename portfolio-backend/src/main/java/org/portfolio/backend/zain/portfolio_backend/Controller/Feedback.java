package org.portfolio.backend.zain.portfolio_backend.Controller;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Feedback {
    private long id;
    private String name;
    private String email;
    private String message;
    
}
