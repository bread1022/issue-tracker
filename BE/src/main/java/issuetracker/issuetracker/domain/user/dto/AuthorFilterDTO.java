package issuetracker.issuetracker.domain.user.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class AuthorFilterDTO {
    private Long id;
    private String name;
    private String profileUrl;
}
