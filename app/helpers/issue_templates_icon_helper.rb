module IssueTemplatesIconHelper
  def self.sprite_icon_or_label(view, icon_name, label = nil, **options)
    if view.respond_to?(:sprite_icon)
      view.sprite_icon(icon_name, label, **options)
    else
      label
    end
  end

  def sprite_icon_or_label(icon_name, label = nil, **options)
    view = self
    if view.respond_to?(:sprite_icon)
      view.sprite_icon(icon_name, label, **options)
    else
      label
    end
  end
end
