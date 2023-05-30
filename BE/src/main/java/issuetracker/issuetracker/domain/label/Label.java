package issuetracker.issuetracker.domain.label;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

@Getter
@AllArgsConstructor
@Table("label")
public class Label {
    @Id
    @Column("label_id")
    private Long id;
    private String title;
    private String fontColor;
    private String description;
    //추가
    private boolean isDelete;
    private String backgroundColor;
}
