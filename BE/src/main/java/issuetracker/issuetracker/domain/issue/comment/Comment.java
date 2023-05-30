package issuetracker.issuetracker.domain.issue.comment;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;

import java.time.LocalDateTime;

@Getter
public class Comment {
    @Id
    private Long id;
    private String contents;
    private LocalDateTime createTime;
    private LocalDateTime updateTime;
}
