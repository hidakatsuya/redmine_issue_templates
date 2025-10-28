module IssueTemplatesIconHelper
  def sprite_icon_or_label(icon_name, label, **options)
    if Gem::Version.new(Redmine::VERSION.to_s) >= Gem::Version.new('6.0.0')
      sprite_icon(icon_name, label, **options)
    else
      label
    end
  end
end
