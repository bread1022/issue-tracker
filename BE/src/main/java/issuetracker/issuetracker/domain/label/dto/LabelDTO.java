package issuetracker.issuetracker.domain.label.dto;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LabelDTO {
    private Long id;
    private String labelName;
    private String backgroundColor;
    private String fontColor;
}