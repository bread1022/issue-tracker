package issuetracker.issuetracker.domain.label.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class PostingLabelDTO {
    private String title;
    private String description;
    private String backgroundColor;
}
