package issuetracker.issuetracker.domain.milestone.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Getter
@Setter
public class MilestonePostDTO {

    @NotNull
    private String title;
    private String description;
    private LocalDateTime completeDate;
}
