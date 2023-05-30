package issuetracker.issuetracker.domain.page.dto.request;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Getter
@Setter
@ToString
public class FilterRequestDTO {
    private String isOpen;
    private String author;
    private List<String> assignee;
    //내가 댓글을 남긴 이슈
    private String comment;
}
